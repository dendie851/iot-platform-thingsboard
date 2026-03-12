const mqtt = require('mqtt');

// --- KONFIGURASI ---
const BROKER_URL = 'mqtt://127.0.0.1'; // Alamat server kamu
const ACCESS_TOKEN = '12345678';           // Token perangkat kamu
const INTERVAL_MS = 10000;                // Durasi 1 menit (60 detik)

// Hubungkan ke broker MQTT
const client = mqtt.connect(BROKER_URL, {
    username: ACCESS_TOKEN, // Username wajib diisi Access Token
    port: 1883
});

client.on('connect', () => {
    console.log('Terhubung ke ThingsBoard!');

    // Jalankan pengiriman data secara berkala
    setInterval(() => {
        // Simulasi data sensor DHT22
        const temperature = (Math.random() * (46 - 25) + 25).toFixed(1);
        const humidity = (Math.random() * (70 - 40) + 40).toFixed(1);

        // Format JSON sesuai standar ThingsBoard
        const payload = {
            temperature: parseFloat(temperature),
            humidity: parseFloat(humidity)
        };

        // Publish ke topik telemetry
        client.publish('v1/devices/me/telemetry', JSON.stringify(payload), (err) => {
            if (!err) {
                console.log(`[${new Date().toLocaleTimeString()}] Data terkirim:`, payload);
            } else {
                console.error('Gagal mengirim data:', err);
            }
        });
    }, INTERVAL_MS);
});

client.on('error', (err) => {
    console.error('Koneksi Error:', err);
});