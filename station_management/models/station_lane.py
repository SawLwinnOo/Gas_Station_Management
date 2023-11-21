from odoo import api, fields, models


class StationManagementLane(models.Model):
    _name = 'station.management.lane'
    _inherit = ['mail.thread', 'mail.activity.mixin']
    _description = 'StationManagementLane'

    name = fields.Char(tracking=True)
    gas_pump_ids = fields.Many2many('station.gas.pump', 'lane_id', tracking=True)
    station_id = fields.Many2one('station.management')
    active = fields.Boolean()
    color = fields.Integer(string='Color')

