from odoo import api, fields, models


class GasPump(models.Model):
    _name = 'station.gas.pump'
    _inherit = ['mail.thread', 'mail.activity.mixin']
    _description = 'GasPump'

    name = fields.Char()
    station_id = fields.Many2one('station.management')
    lane_id = fields.Many2one('station.management.lane')
    booking_id = fields.Many2one('station.booking')

