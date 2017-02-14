const mockResponse = { 'city': { 'id': 2643743, 'name': 'London', 'coord': { 'lon': -0.12574, 'lat': 51.50853 }, 'country': 'GB', 'population': 0, 'sys': { 'population': 0 } }, 'cod': '200', 'message': 0.0051, 'cnt': 36, 'list': [{ 'dt': 1487073600, 'main': { 'temp': 285.21, 'temp_min': 281.722, 'temp_max': 285.21, 'pressure': 1029.17, 'sea_level': 1036.86, 'grnd_level': 1029.17, 'humidity': 78, 'temp_kf': 3.49 }, 'weather': [{ 'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d' }], 'clouds': { 'all': 0 }, 'wind': { 'speed': 5.1, 'deg': 120.001 }, 'sys': { 'pod': 'd' }, 'dt_txt': '2017-02-14 12:00:00' }, { 'dt': 1487084400, 'main': { 'temp': 285.8, 'temp_min': 283.186, 'temp_max': 285.8, 'pressure': 1029.06, 'sea_level': 1036.78, 'grnd_level': 1029.06, 'humidity': 76, 'temp_kf': 2.62 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d' }], 'clouds': { 'all': 56 }, 'wind': { 'speed': 4.64, 'deg': 137.006 }, 'rain': { '3h': 0.11 }, 'sys': { 'pod': 'd' }, 'dt_txt': '2017-02-14 15:00:00' }, { 'dt': 1487095200, 'main': { 'temp': 285.04, 'temp_min': 283.292, 'temp_max': 285.04, 'pressure': 1029.74, 'sea_level': 1037.47, 'grnd_level': 1029.74, 'humidity': 79, 'temp_kf': 1.74 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 80 }, 'wind': { 'speed': 4.16, 'deg': 141 }, 'rain': { '3h': 0.05 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-14 18:00:00' }, { 'dt': 1487106000, 'main': { 'temp': 284.48, 'temp_min': 283.604, 'temp_max': 284.48, 'pressure': 1030.5, 'sea_level': 1038.3, 'grnd_level': 1030.5, 'humidity': 89, 'temp_kf': 0.87 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 80 }, 'wind': { 'speed': 3.67, 'deg': 165.5 }, 'rain': { '3h': 0.13 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-14 21:00:00' }, { 'dt': 1487116800, 'main': { 'temp': 282.742, 'temp_min': 282.742, 'temp_max': 282.742, 'pressure': 1031.86, 'sea_level': 1039.69, 'grnd_level': 1031.86, 'humidity': 96, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 8 }, 'wind': { 'speed': 2.82, 'deg': 191.5 }, 'rain': { '3h': 0.08 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-15 00:00:00' }, { 'dt': 1487127600, 'main': { 'temp': 280.57, 'temp_min': 280.57, 'temp_max': 280.57, 'pressure': 1032.92, 'sea_level': 1040.71, 'grnd_level': 1032.92, 'humidity': 100, 'temp_kf': 0 }, 'weather': [{ 'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04n' }], 'clouds': { 'all': 64 }, 'wind': { 'speed': 2.57, 'deg': 177.503 }, 'rain': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-15 03:00:00' }, { 'dt': 1487138400, 'main': { 'temp': 279.335, 'temp_min': 279.335, 'temp_max': 279.335, 'pressure': 1033.02, 'sea_level': 1040.93, 'grnd_level': 1033.02, 'humidity': 100, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 36 }, 'wind': { 'speed': 2.9, 'deg': 145 }, 'rain': { '3h': 0.01 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-15 06:00:00' }, { 'dt': 1487149200, 'main': { 'temp': 281.575, 'temp_min': 281.575, 'temp_max': 281.575, 'pressure': 1032.98, 'sea_level': 1040.79, 'grnd_level': 1032.98, 'humidity': 95, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d' }], 'clouds': { 'all': 80 }, 'wind': { 'speed': 3.41, 'deg': 154.503 }, 'rain': { '3h': 0.05 }, 'sys': { 'pod': 'd' }, 'dt_txt': '2017-02-15 09:00:00' }, { 'dt': 1487160000, 'main': { 'temp': 284.377, 'temp_min': 284.377, 'temp_max': 284.377, 'pressure': 1032.04, 'sea_level': 1039.74, 'grnd_level': 1032.04, 'humidity': 81, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d' }], 'clouds': { 'all': 76 }, 'wind': { 'speed': 5.52, 'deg': 174.002 }, 'rain': { '3h': 0.08 }, 'sys': { 'pod': 'd' }, 'dt_txt': '2017-02-15 12:00:00' }, { 'dt': 1487170800, 'main': { 'temp': 283.599, 'temp_min': 283.599, 'temp_max': 283.599, 'pressure': 1030.72, 'sea_level': 1038.45, 'grnd_level': 1030.72, 'humidity': 91, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d' }], 'clouds': { 'all': 92 }, 'wind': { 'speed': 5.28, 'deg': 195.002 }, 'rain': { '3h': 1.12 }, 'sys': { 'pod': 'd' }, 'dt_txt': '2017-02-15 15:00:00' }, { 'dt': 1487181600, 'main': { 'temp': 282.982, 'temp_min': 282.982, 'temp_max': 282.982, 'pressure': 1031, 'sea_level': 1038.78, 'grnd_level': 1031, 'humidity': 90, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 80 }, 'wind': { 'speed': 5.16, 'deg': 208.005 }, 'rain': { '3h': 0.15 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-15 18:00:00' }, { 'dt': 1487192400, 'main': { 'temp': 282.615, 'temp_min': 282.615, 'temp_max': 282.615, 'pressure': 1032.13, 'sea_level': 1039.82, 'grnd_level': 1032.13, 'humidity': 89, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 80 }, 'wind': { 'speed': 4.78, 'deg': 231.003 }, 'rain': { '3h': 0.04 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-15 21:00:00' }, { 'dt': 1487203200, 'main': { 'temp': 281.699, 'temp_min': 281.699, 'temp_max': 281.699, 'pressure': 1033, 'sea_level': 1040.72, 'grnd_level': 1033, 'humidity': 89, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 76 }, 'wind': { 'speed': 4.26, 'deg': 244.001 }, 'rain': { '3h': 0.03 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-16 00:00:00' }, { 'dt': 1487214000, 'main': { 'temp': 281.417, 'temp_min': 281.417, 'temp_max': 281.417, 'pressure': 1032.92, 'sea_level': 1040.65, 'grnd_level': 1032.92, 'humidity': 86, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 80 }, 'wind': { 'speed': 3.81, 'deg': 244.004 }, 'rain': { '3h': 0.01 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-16 03:00:00' }, { 'dt': 1487224800, 'main': { 'temp': 281.525, 'temp_min': 281.525, 'temp_max': 281.525, 'pressure': 1032.97, 'sea_level': 1040.77, 'grnd_level': 1032.97, 'humidity': 90, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 92 }, 'wind': { 'speed': 3.22, 'deg': 244.002 }, 'rain': { '3h': 0.09 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-16 06:00:00' }, { 'dt': 1487235600, 'main': { 'temp': 281.271, 'temp_min': 281.271, 'temp_max': 281.271, 'pressure': 1033.66, 'sea_level': 1041.48, 'grnd_level': 1033.66, 'humidity': 90, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d' }], 'clouds': { 'all': 12 }, 'wind': { 'speed': 3.19, 'deg': 260.006 }, 'rain': { '3h': 0.03 }, 'sys': { 'pod': 'd' }, 'dt_txt': '2017-02-16 09:00:00' }, { 'dt': 1487246400, 'main': { 'temp': 282.478, 'temp_min': 282.478, 'temp_max': 282.478, 'pressure': 1033.83, 'sea_level': 1041.53, 'grnd_level': 1033.83, 'humidity': 86, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d' }], 'clouds': { 'all': 24 }, 'wind': { 'speed': 3.86, 'deg': 261.001 }, 'rain': { '3h': 0.01 }, 'sys': { 'pod': 'd' }, 'dt_txt': '2017-02-16 12:00:00' }, { 'dt': 1487257200, 'main': { 'temp': 283.424, 'temp_min': 283.424, 'temp_max': 283.424, 'pressure': 1032.83, 'sea_level': 1040.57, 'grnd_level': 1032.83, 'humidity': 79, 'temp_kf': 0 }, 'weather': [{ 'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '02d' }], 'clouds': { 'all': 8 }, 'wind': { 'speed': 4.07, 'deg': 264.001 }, 'rain': {}, 'sys': { 'pod': 'd' }, 'dt_txt': '2017-02-16 15:00:00' }, { 'dt': 1487268000, 'main': { 'temp': 281.599, 'temp_min': 281.599, 'temp_max': 281.599, 'pressure': 1033.15, 'sea_level': 1040.92, 'grnd_level': 1033.15, 'humidity': 80, 'temp_kf': 0 }, 'weather': [{ 'id': 802, 'main': 'Clouds', 'description': 'scattered clouds', 'icon': '03n' }], 'clouds': { 'all': 44 }, 'wind': { 'speed': 3.19, 'deg': 263.001 }, 'rain': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-16 18:00:00' }, { 'dt': 1487278800, 'main': { 'temp': 280.571, 'temp_min': 280.571, 'temp_max': 280.571, 'pressure': 1033.46, 'sea_level': 1041.26, 'grnd_level': 1033.46, 'humidity': 85, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 68 }, 'wind': { 'speed': 2.66, 'deg': 257.002 }, 'rain': { '3h': 0.01 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-16 21:00:00' }, { 'dt': 1487289600, 'main': { 'temp': 279.872, 'temp_min': 279.872, 'temp_max': 279.872, 'pressure': 1033.26, 'sea_level': 1041.1, 'grnd_level': 1033.26, 'humidity': 89, 'temp_kf': 0 }, 'weather': [{ 'id': 801, 'main': 'Clouds', 'description': 'few clouds', 'icon': '02n' }], 'clouds': { 'all': 20 }, 'wind': { 'speed': 2.12, 'deg': 251.501 }, 'rain': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-17 00:00:00' }, { 'dt': 1487300400, 'main': { 'temp': 277.349, 'temp_min': 277.349, 'temp_max': 277.349, 'pressure': 1032.56, 'sea_level': 1040.41, 'grnd_level': 1032.56, 'humidity': 98, 'temp_kf': 0 }, 'weather': [{ 'id': 802, 'main': 'Clouds', 'description': 'scattered clouds', 'icon': '03n' }], 'clouds': { 'all': 32 }, 'wind': { 'speed': 1.42, 'deg': 222.001 }, 'rain': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-17 03:00:00' }, { 'dt': 1487311200, 'main': { 'temp': 276.512, 'temp_min': 276.512, 'temp_max': 276.512, 'pressure': 1032.09, 'sea_level': 1040, 'grnd_level': 1032.09, 'humidity': 91, 'temp_kf': 0 }, 'weather': [{ 'id': 802, 'main': 'Clouds', 'description': 'scattered clouds', 'icon': '03n' }], 'clouds': { 'all': 48 }, 'wind': { 'speed': 1.61, 'deg': 204.003 }, 'rain': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-17 06:00:00' }, { 'dt': 1487322000, 'main': { 'temp': 278.928, 'temp_min': 278.928, 'temp_max': 278.928, 'pressure': 1032.2, 'sea_level': 1040.05, 'grnd_level': 1032.2, 'humidity': 93, 'temp_kf': 0 }, 'weather': [{ 'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04d' }], 'clouds': { 'all': 56 }, 'wind': { 'speed': 1.26, 'deg': 170 }, 'rain': {}, 'sys': { 'pod': 'd' }, 'dt_txt': '2017-02-17 09:00:00' }, { 'dt': 1487332800, 'main': { 'temp': 283.367, 'temp_min': 283.367, 'temp_max': 283.367, 'pressure': 1031.77, 'sea_level': 1039.5, 'grnd_level': 1031.77, 'humidity': 84, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d' }], 'clouds': { 'all': 80 }, 'wind': { 'speed': 2.07, 'deg': 166.001 }, 'rain': { '3h': 0.09 }, 'sys': { 'pod': 'd' }, 'dt_txt': '2017-02-17 12:00:00' }, { 'dt': 1487343600, 'main': { 'temp': 284.074, 'temp_min': 284.074, 'temp_max': 284.074, 'pressure': 1030.63, 'sea_level': 1038.31, 'grnd_level': 1030.63, 'humidity': 84, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d' }], 'clouds': { 'all': 68 }, 'wind': { 'speed': 2.3, 'deg': 195.501 }, 'rain': { '3h': 0.25 }, 'sys': { 'pod': 'd' }, 'dt_txt': '2017-02-17 15:00:00' }, { 'dt': 1487354400, 'main': { 'temp': 282.906, 'temp_min': 282.906, 'temp_max': 282.906, 'pressure': 1030.49, 'sea_level': 1038.24, 'grnd_level': 1030.49, 'humidity': 88, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 80 }, 'wind': { 'speed': 2.36, 'deg': 180.501 }, 'rain': { '3h': 0.02 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-17 18:00:00' }, { 'dt': 1487365200, 'main': { 'temp': 281.677, 'temp_min': 281.677, 'temp_max': 281.677, 'pressure': 1030.67, 'sea_level': 1038.35, 'grnd_level': 1030.67, 'humidity': 91, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 92 }, 'wind': { 'speed': 2.84, 'deg': 169.002 }, 'rain': { '3h': 0.02 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-17 21:00:00' }, { 'dt': 1487376000, 'main': { 'temp': 281.314, 'temp_min': 281.314, 'temp_max': 281.314, 'pressure': 1029.82, 'sea_level': 1037.68, 'grnd_level': 1029.82, 'humidity': 94, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 88 }, 'wind': { 'speed': 2.96, 'deg': 165 }, 'rain': { '3h': 0.06 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-18 00:00:00' }, { 'dt': 1487386800, 'main': { 'temp': 281.699, 'temp_min': 281.699, 'temp_max': 281.699, 'pressure': 1028.47, 'sea_level': 1036.14, 'grnd_level': 1028.47, 'humidity': 97, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 88 }, 'wind': { 'speed': 2.76, 'deg': 172 }, 'rain': { '3h': 0.22 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-18 03:00:00' }, { 'dt': 1487397600, 'main': { 'temp': 281.726, 'temp_min': 281.726, 'temp_max': 281.726, 'pressure': 1027.36, 'sea_level': 1034.95, 'grnd_level': 1027.36, 'humidity': 98, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 92 }, 'wind': { 'speed': 3.01, 'deg': 185 }, 'rain': { '3h': 0.06 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-18 06:00:00' }, { 'dt': 1487408400, 'main': { 'temp': 282.896, 'temp_min': 282.896, 'temp_max': 282.896, 'pressure': 1026.15, 'sea_level': 1033.78, 'grnd_level': 1026.15, 'humidity': 95, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d' }], 'clouds': { 'all': 92 }, 'wind': { 'speed': 4.07, 'deg': 184.003 }, 'rain': { '3h': 0.39 }, 'sys': { 'pod': 'd' }, 'dt_txt': '2017-02-18 09:00:00' }, { 'dt': 1487419200, 'main': { 'temp': 284.532, 'temp_min': 284.532, 'temp_max': 284.532, 'pressure': 1024.72, 'sea_level': 1032.34, 'grnd_level': 1024.72, 'humidity': 92, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d' }], 'clouds': { 'all': 92 }, 'wind': { 'speed': 4.81, 'deg': 203.001 }, 'rain': { '3h': 0.18 }, 'sys': { 'pod': 'd' }, 'dt_txt': '2017-02-18 12:00:00' }, { 'dt': 1487430000, 'main': { 'temp': 284.849, 'temp_min': 284.849, 'temp_max': 284.849, 'pressure': 1022.34, 'sea_level': 1029.95, 'grnd_level': 1022.34, 'humidity': 86, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d' }], 'clouds': { 'all': 92 }, 'wind': { 'speed': 5.82, 'deg': 209.001 }, 'rain': { '3h': 0.04 }, 'sys': { 'pod': 'd' }, 'dt_txt': '2017-02-18 15:00:00' }, { 'dt': 1487440800, 'main': { 'temp': 284.029, 'temp_min': 284.029, 'temp_max': 284.029, 'pressure': 1020.53, 'sea_level': 1028.14, 'grnd_level': 1020.53, 'humidity': 88, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 92 }, 'wind': { 'speed': 5.97, 'deg': 210.001 }, 'rain': { '3h': 0.45 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-18 18:00:00' }, { 'dt': 1487451600, 'main': { 'temp': 283.308, 'temp_min': 283.308, 'temp_max': 283.308, 'pressure': 1019.11, 'sea_level': 1026.66, 'grnd_level': 1019.11, 'humidity': 95, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 80 }, 'wind': { 'speed': 5.26, 'deg': 227.009 }, 'rain': { '3h': 1.02 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2017-02-18 21:00:00' }] };

export default mockResponse;