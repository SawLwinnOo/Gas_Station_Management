/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component, onWillStart, useState, useRef} from "@odoo/owl";


class BookingList extends Component {

    setup() {

        this.booing= ['name',"customer",'car_id','station_id','booking_date','state']
        this.orm = this.env.services.orm;
        this.searchInput = useRef('search-input')
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

        this.state.BookingList = await this.orm.searchRead("station.booking",[], this.booing);
        console.log(this.state.BookingList)

    }

    async searchBooking(){
        var text =this.searchInput.el.value
        this.state.BookingList = await this.orm.searchRead("station.booking",[['name', 'ilike', text]], this.booing);
        console.log(this.searchInput.el.value);
        console.log("search..");
    }
}

BookingList.template = "station_management.booking_list";

registry.category("actions").add("station_management.booking_client_action", BookingList);