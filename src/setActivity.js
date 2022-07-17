const base = 0xdd50;

export default function setActivity(client) {
	client.request('SET_ACTIVITY', {
			pid: process.pid,
			activity: {
				details: '💀 NIGDY NIE KLIKAJ TEGO',
				state: '   PRZYCISKU O 3 W NOCY',
				assets: {
					large_image: 'logo-1080',
				},
				buttons: [
					{ label: 'Nie klikaj', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab' }
				]
			}
		});
}
