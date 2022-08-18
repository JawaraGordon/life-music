puts 'Seeding Users...'

User.create(username: "Keisha",email: "keisha@gmail.com", password: "123", image_url:"https://jawaragordon.com/lifemusic/img/user1.png", bio:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat doloremque ea sunt doloribus voluptates temporibus, numquam delectus quaerat sed cumque?", age:22, location:"New York, USA" )
User.create(username: "Jalen",email: "jalen@gmail.com", password: "123", image_url:"https://jawaragordon.com/lifemusic/img/user2.png", bio:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat doloremque ea sunt doloribus voluptates temporibus, numquam delectus quaerat sed cumque?", age:28, location:"Los Angeles, USA" )
User.create(username: "Lori",email: "lori@gmail.com", password: "123", image_url:"https://jawaragordon.com/lifemusic/img/user3.png", bio:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat doloremque ea sunt doloribus voluptates temporibus, numquam delectus quaerat sed cumque?", age:34, location:"London, UK" )
User.create(username: "Alex",email: "alex@gmail.com", password: "123", image_url:"https://jawaragordon.com/lifemusic/img/user4.png", bio:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat doloremque ea sunt doloribus voluptates temporibus, numquam delectus quaerat sed cumque?", age:19, location:"Rio De Janeiro, Brazil" )

puts 'Seeding Chill Songs...'

Song.create(title: "0500 Brunch",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?chill", length:209, mood_rank:2, bpm:85, key_of_song:"Em", song_url:"https://jawaragordon.com/music/chill/0500%20Brunch.mp3" )
Song.create(title: "3AM FOMO",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?chill", length:258, mood_rank:2, bpm:80, key_of_song:"Am", song_url:"https://jawaragordon.com/music/chill/3AM%20FOMO%20ft.%20Andres.mp3" )
Song.create(title: "Poolin Chillside",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?chill", length:357, mood_rank:2, bpm:93, key_of_song:"Ebm", song_url:"https://jawaragordon.com/music/chill/Poolin%20Chillside.mp3" )
Song.create(title: "Paper Work",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?chill", length:231, mood_rank:2, bpm:83, key_of_song:"Em", song_url:"https://jawaragordon.com/music/chill/Paper%20Work.mp3" )

puts 'Seeding Excited Songs...'

Song.create(title: "Gonna Be Alright",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?adventure", length:209, mood_rank:3, bpm:115, key_of_song:"Em", song_url:"https://jawaragordon.com/music/excited/Gonna%20Be%20Alright%20%5BFull%5D.mp3" )
Song.create(title: "Neon Dreams",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?adventure", length:258, mood_rank:3, bpm:112, key_of_song:"Am", song_url:"https://jawaragordon.com/music/excited/Neon%20Dreams.mp3" )
Song.create(title: "Terminus",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?adventure", length:357, mood_rank:3, bpm:170, key_of_song:"Ebm", song_url:"https://jawaragordon.com/music/excited/Terminus.mp3" )
Song.create(title: "Wit My Crew",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?adventure", length:231, mood_rank:3, bpm:150, key_of_song:"Em", song_url:"https://jawaragordon.com/music/excited/Wit%20My%20Crew1.mp3" )

puts 'Seeding Focused Songs...'


Song.create(title: "Chakras",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?focused", length:209, mood_rank:1, bpm:144, key_of_song:"Em", song_url:"https://jawaragordon.com/music/focused/Chakras%20All.mp3" )
Song.create(title: "Arrival",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?focused", length:258, mood_rank:1, bpm:90, key_of_song:"Am", song_url:"https://jawaragordon.com/music/focused/Arrival.mp3" )
Song.create(title: "Flux Paradox",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?focused", length:357, mood_rank:1, bpm:100, key_of_song:"Ebm", song_url:"https://jawaragordon.com/music/focused/Flux%20Paradox.mp3" )
Song.create(title: "Movement",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?focused", length:231, mood_rank:1, bpm:70, key_of_song:"Em", song_url:"https://jawaragordon.com/music/focused/Movement.mp3" )

puts 'Seeding Intense Songs...'


Song.create(title: "Infrared Radiation",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?angry", length:209, mood_rank:4, bpm:70, key_of_song:"Em", song_url:"https://jawaragordon.com/music/angry/%21Infrared%20Radiation.mp3" )
Song.create(title: "Down Under",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?angry", length:258, mood_rank:4, bpm:90, key_of_song:"Am", song_url:"https://jawaragordon.com/music/angry/Down%20Under.mp3" )
Song.create(title: "Human Machine",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?angry", length:357, mood_rank:4, bpm:100, key_of_song:"Ebm", song_url:"https://jawaragordon.com/music/angry/Human%7CMachine.mp3" )
Song.create(title: "Tiamut",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?angry", length:231, mood_rank:4, bpm:70, key_of_song:"Em", song_url:"https://jawaragordon.com/music/angry/Tiamut.mp3" )

puts 'Seeding Happy Songs...'


Song.create(title: "I'll Be There",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?happy", length:209, mood_rank:5, bpm:75, key_of_song:"Em", song_url:"https://jawaragordon.com/music/happy/I%27ll%20Be%20There.mp3" )
Song.create(title: "Couped Up",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?happy", length:258, mood_rank:5, bpm:115, key_of_song:"Am", song_url:"https://jawaragordon.com/music/happy/Kill%20Paris%20–%20“Couped%20Up”%20%28DJ%20IMMINENT%20Nu-Disco%20Remix%29.mp3" )
Song.create(title: "Life Is A Journey",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?happy", length:357, mood_rank:5, bpm:170, key_of_song:"Ebm", song_url:"https://jawaragordon.com/music/happy/Life%20Is%20A%20Journey_Master.mp3" )
Song.create(title: "VIBEZ",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?happy", length:231, mood_rank:5, bpm:90, key_of_song:"Em", song_url:"https://jawaragordon.com/music/happy/VIBEZ.mp3" )

puts "✅ Done seeding!"