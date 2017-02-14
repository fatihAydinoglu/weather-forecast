const mockResponseReduced = {
    city: 'London',
    country: 'GB',
    forecast: [
        {
            date: 1487073600,
            temp: 12,
            humidity: 78,
            pressure: 1029.17,
            icon: '01d',
            description: 'Clear - clear sky'
        },
        {
            date: 1487084400,
            temp: 12,
            humidity: 76,
            pressure: 1029.06,
            icon: '10d',
            description: 'Rain - light rain'
        },
        {
            date: 1487095200,
            temp: 11,
            humidity: 79,
            pressure: 1029.74,
            icon: '10n',
            description: 'Rain - light rain'
        },
        {
            date: 1487106000,
            temp: 11,
            humidity: 89,
            pressure: 1030.5,
            icon: '10n',
            description: 'Rain - light rain'
        },
        {
            date: 1487116800,
            temp: 9,
            humidity: 96,
            pressure: 1031.86,
            icon: '10n',
            description: 'Rain - light rain'
        },
        {
            date: 1487127600,
            temp: 7,
            humidity: 100,
            pressure: 1032.92,
            icon: '04n',
            description: 'Clouds - broken clouds'
        },
        {
            date: 1487138400,
            temp: 6,
            humidity: 100,
            pressure: 1033.02,
            icon: '10n',
            description: 'Rain - light rain'
        },
        {
            date: 1487149200,
            temp: 8,
            humidity: 95,
            pressure: 1032.98,
            icon: '10d',
            description: 'Rain - light rain'
        },
        {
            date: 1487160000,
            temp: 11,
            humidity: 81,
            pressure: 1032.04,
            icon: '10d',
            description: 'Rain - light rain'
        },
        {
            date: 1487170800,
            temp: 10,
            humidity: 91,
            pressure: 1030.72,
            icon: '10d',
            description: 'Rain - light rain'
        },
        {
            date: 1487181600,
            temp: 9,
            humidity: 90,
            pressure: 1031,
            icon: '10n',
            description: 'Rain - light rain'
        },
        {
            date: 1487192400,
            temp: 9,
            humidity: 89,
            pressure: 1032.13,
            icon: '10n',
            description: 'Rain - light rain'
        },
        {
            date: 1487203200,
            temp: 8,
            humidity: 89,
            pressure: 1033,
            icon: '10n',
            description: 'Rain - light rain'
        },
        {
            date: 1487214000,
            temp: 8,
            humidity: 86,
            pressure: 1032.92,
            icon: '10n',
            description: 'Rain - light rain'
        },
        {
            date: 1487224800,
            temp: 8,
            humidity: 90,
            pressure: 1032.97,
            icon: '10n',
            description: 'Rain - light rain'
        },
        {
            date: 1487235600,
            temp: 8,
            humidity: 90,
            pressure: 1033.66,
            icon: '10d',
            description: 'Rain - light rain'
        },
        {
            date: 1487246400,
            temp: 9,
            humidity: 86,
            pressure: 1033.83,
            icon: '10d',
            description: 'Rain - light rain'
        },
        {
            date: 1487257200,
            temp: 10,
            humidity: 79,
            pressure: 1032.83,
            icon: '02d',
            description: 'Clear - clear sky'
        },
        {
            date: 1487268000,
            temp: 8,
            humidity: 80,
            pressure: 1033.15,
            icon: '03n',
            description: 'Clouds - scattered clouds'
        },
        {
            date: 1487278800,
            temp: 7,
            humidity: 85,
            pressure: 1033.46,
            icon: '10n',
            description: 'Rain - light rain'
        },
        {
            date: 1487289600,
            temp: 6,
            humidity: 89,
            pressure: 1033.26,
            icon: '02n',
            description: 'Clouds - few clouds'
        },
        {
            date: 1487300400,
            temp: 4,
            humidity: 98,
            pressure: 1032.56,
            icon: '03n',
            description: 'Clouds - scattered clouds'
        },
        {
            date: 1487311200,
            temp: 3,
            humidity: 91,
            pressure: 1032.09,
            icon: '03n',
            description: 'Clouds - scattered clouds'
        },
        {
            date: 1487322000,
            temp: 5,
            humidity: 93,
            pressure: 1032.2,
            icon: '04d',
            description: 'Clouds - broken clouds'
        },
        {
            date: 1487332800,
            temp: 10,
            humidity: 84,
            pressure: 1031.77,
            icon: '10d',
            description: 'Rain - light rain'
        },
        {
            date: 1487343600,
            temp: 10,
            humidity: 84,
            pressure: 1030.63,
            icon: '10d',
            description: 'Rain - light rain'
        },
        {
            date: 1487354400,
            temp: 9,
            humidity: 88,
            pressure: 1030.49,
            icon: '10n',
            description: 'Rain - light rain'
        },
        {
            date: 1487365200,
            temp: 8,
            humidity: 91,
            pressure: 1030.67,
            icon: '10n',
            description: 'Rain - light rain'
        },
        {
            date: 1487376000,
            temp: 8,
            humidity: 94,
            pressure: 1029.82,
            icon: '10n',
            description: 'Rain - light rain'
        },
        {
            date: 1487386800,
            temp: 8,
            humidity: 97,
            pressure: 1028.47,
            icon: '10n',
            description: 'Rain - light rain'
        },
        {
            date: 1487397600,
            temp: 8,
            humidity: 98,
            pressure: 1027.36,
            icon: '10n',
            description: 'Rain - light rain'
        },
        {
            date: 1487408400,
            temp: 9,
            humidity: 95,
            pressure: 1026.15,
            icon: '10d',
            description: 'Rain - light rain'
        },
        {
            date: 1487419200,
            temp: 11,
            humidity: 92,
            pressure: 1024.72,
            icon: '10d',
            description: 'Rain - light rain'
        },
        {
            date: 1487430000,
            temp: 11,
            humidity: 86,
            pressure: 1022.34,
            icon: '10d',
            description: 'Rain - light rain'
        },
        {
            date: 1487440800,
            temp: 10,
            humidity: 88,
            pressure: 1020.53,
            icon: '10n',
            description: 'Rain - light rain'
        },
        {
            date: 1487451600,
            temp: 10,
            humidity: 95,
            pressure: 1019.11,
            icon: '10n',
            description: 'Rain - light rain'
        }
    ],
    selectedDate: null,
    pending: false,
    error: ''
};

export default mockResponseReduced;