/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component, onWillStart, useState, useRef} from "@odoo/owl";


class BookingList extends Component {

    setup() {
        this.model = "station.booking"
        this.booing= ['name',"customer",'car_id','station_id','booking_date','state'];
        this.orm = this.env.services.orm;
        this.searchInput = useRef('search-input')
        this.state = useState({
            BookingList: []
        })

        onWillStart(async () =>{
            await this.GetAllBooking()
        });
    }

    async GetAllBooking(){

        this.state.BookingList = await this.orm.searchRead(this.model,[], this.booing);
        // console.log(this.state.BookingList)

    }

    async searchBooking(){

        // get input text
        var text =this.searchInput.el.value
        // search in the model
        this.state.BookingList = await this.orm.searchRead(this.model,[['name', 'ilike', text]], this.booing);
        console.log('text', text);
        console.log("search..");
    }

    async deleteBooking(booking){
        await this.orm.unlink(this.model,[booking.id])
        await this.GetAllBooking()

    }

    async changeState(e, booking){
        await this.orm.write(this.model, [booking.id], {"state": e.target.title})
        // console.log('event..', e.target.title)
        // console.log('booking..', booking)
    }

}

BookingList.template = "station_management.booking_list";

registry.category("actions").add("station_management.booking_client_action", BookingList);