/** @odoo-module **/

import {registry} from "@web/core/registry";
import {Component, onWillStart, useState, useRef, useEnv} from "@odoo/owl";
import {useService} from "@web/core/utils/hooks";
import {ConfirmationDialog} from "@web/core/confirmation_dialog/confirmation_dialog";
import {_t} from "@web/core/l10n/translation";


class BookingList extends Component {

    setup() {
        this.dialog = useService("dialog")
        this.model = "station.booking"
        this.booing = ['name', "customer", 'car_id', 'station_id', 'booking_date', 'state'];
        this.orm = this.env.services.orm;
        this.searchInput = useRef('search-input')
        this.state = useState({
            BookingList: [],
            isChecked: false,
        })

        onWillStart(async () => {
            await this.GetAllBooking()
        });
    }

    async GetAllBooking() {

        this.state.BookingList = await this.orm.searchRead(this.model, [['state', '=', 'arrived']], this.booing);
        // console.log(this.state.BookingList)

    }

    async searchBooking() {

        // get input text
        var text = this.searchInput.el.value
        // search in the model
        this.state.BookingList = await this.orm.searchRead(this.model, [['name', 'ilike', text]], this.booing);
    }


    async onDeleteBooking(booking) {
        console.log(this.dialog)
        await this.dialog.add(ConfirmationDialog, {
            body: _t("Are you sure you want to Delete?"),
            confirmLabel: "Delete",
            confirm: () => {
                this.deleteBooking(booking)
            },
            cancel: () => {
            },
        })

    }

    async deleteBooking(booking) {
        await this.orm.unlink(this.model, [booking.id])
        await this.GetAllBooking()

    }


    toggleCheckbox(e) {
        this.state.isChecked =  e.target.checked;

    }


    doSomething() {

        // Access the checkbox state
         const isChecked = this.state.isChecked;

            if (isChecked) {

                console.log("Checkbox is checked");

            } else {

                console.log("Checkbox is not checked");

            }
    }
}

function useStore() {
    const env = useEnv();
    return useState(env.store);
}

BookingList.template = "station_management.booking_list";

registry.category("actions").add("station_management.booking_client_action", BookingList);