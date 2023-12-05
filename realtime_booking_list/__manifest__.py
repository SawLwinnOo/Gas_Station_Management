{
    'name': 'Realtime Booking',
    'depends': ['station_management'],
    'data': [
        'views/booking_list.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'realtime_booking_list/static/src/station_booking/booking_list.js',
            'realtime_booking_list/static/src/station_booking/booking_list.xml',
        ],
    },

}
