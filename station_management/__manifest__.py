# -*- coding: utf-8 -*-
{
    'name': "station_management",

    'summary': " summary of the module's purpose",

    'author': "My Company",
    'website': "https://www.yourcompany.com",
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'fleet'],

    # always loaded
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
}
