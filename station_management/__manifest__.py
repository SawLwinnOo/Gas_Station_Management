# -*- coding: utf-8 -*-
{
    'name': "Gas Station Management",
    'depends': ['base', 'web', 'mail','fleet'],
    'data': [
        #security
        'security/ir.model.access.csv',
        'security/station_security.xml',

        #data
        'data/sequence.xml',

        #views
        'views/booking.xml',
        'views/station.xml',
        'views/station_lane.xml',
        'views/gas_pump.xml',
        'views/menus.xml'

    ],
}
