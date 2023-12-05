from odoo import api, fields, models


class StationBooking(models.Model):
    _inherit = 'station.booking'
    _description = 'StationBooking'

    @api.model
    def write(self, values):
        res = super(StationBooking, self).write(values)
        message = {
            'info': 'Booking Update',
            "resId": self.id,
            "name": self.name,
            "state": self.state,

        }
        self.env['bus.bus']._sendone('booking_state_channel', 'station.booking/write', message)
        return res





    def unlink(self):
        res = super(StationBooking, self).unlink()
        message = {
            'info': 'Booking Deleted',
            "resId": self.id
        }
        self.env['bus.bus']._sendone('queue_pro_bus', 'station.booking/unlink', message)
        return res


