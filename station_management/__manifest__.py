# -*- coding: utf-8 -*-
{
    'name': "station_management",
    'depends': ['base', 'fleet', 'web'],
    'data': [
        #security
        'security/ir.model.access.csv',

        #data
        'data/sequence.xml',

        #views
        'views/booking.xml',
        'views/station.xml',
        'views/station_lane.xml',
        'views/gas_pump.xml',
        'views/menus.xml'

    ],
    'assets': {
        'web.assets_backend': [
            'station_management/static/src/station_management/booking_list.js',
            'station_management/static/src/station_management/booking_list.xml',
        ],
    }
}
