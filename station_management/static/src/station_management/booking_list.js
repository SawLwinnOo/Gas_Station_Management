/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component, onWillStart, useState} from "@odoo/owl";


class BookingList extends Component {

    setup() {
        this.state = useState({
            BookingList: [
                {'id':1, 'name': "a", 'customer': "Name"},
                {'id':2, 'name': "b", 'customer': "Get"},
            ]
        })

        onWillStart(async () =>{
            await this.GetAllBooking()
        });
    }

    async GetAllBooking(){
        const orm = this.env.services.orm;
        var booing= ['name',"customer",'car_id','station_id','booking_date','state']
        this.state.BookingList = await orm.searchRead("station.booking",[], booing);
        var booking_id =  orm.search('station.booking',[])
        console.log(this.state.BookingList)
        console.log(typeof booking_id)
        console.log( booking_id)
    }
}

BookingList.template = "station_management.booking_list";

registry.category("actions").add("station_management.booking_client_action", BookingList);