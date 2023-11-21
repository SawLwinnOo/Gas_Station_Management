/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component } from "@odoo/owl";


class BookingList extends Component {

}

BookingList.template = "station_management.booking_list";

registry.category("actions").add("station_management.booking_client_action", BookingList);