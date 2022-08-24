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
Song.create(title: "Change Can Happen",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?chill", length:209, mood_rank:2, bpm:85, key_of_song:"Em", song_url:"https://jawaragordon.com/music/chill/Change%20Can%20Happen.mp3" )
Song.create(title: "Dimensions",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?chill", length:258, mood_rank:2, bpm:80, key_of_song:"Am", song_url:"https://jawaragordon.com/music/chill/Dimensions.mp3" )
Song.create(title: "By Storm",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?chill", length:357, mood_rank:2, bpm:93, key_of_song:"Ebm", song_url:"https://jawaragordon.com/music/chill/Imminent%20-%20By%20Storm.mp3" )
Song.create(title: "Collect Calls",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?chill", length:231, mood_rank:2, bpm:85, key_of_song:"Em", song_url:"https://jawaragordon.com/music/chill/IN%20A%20TRANCE.mp3" )
Song.create(title: "Rise Above",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?chill", length:231, mood_rank:2, bpm:90, key_of_song:"Em", song_url:"https://jawaragordon.com/music/chill/Rise%20Above.mp3" )
Song.create(title: "Soul Star",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?chill", length:231, mood_rank:2, bpm:90, key_of_song:"Em", song_url:"https://jawaragordon.com/music/chill/Soul%20Star.mp3" )
Song.create(title: "Transcending Universe",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?chill", length:231, mood_rank:2, bpm:90, key_of_song:"Em", song_url:"https://jawaragordon.com/music/chill/Transcending%20Universe%20Rendered.mp3" )

puts 'Seeding Energized Songs...'

Song.create(title: "Gonna Be Alright",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?adventure", length:209, mood_rank:3, bpm:115, key_of_song:"Em", song_url:"https://jawaragordon.com/music/energized/Gonna%20Be%20Alright%20%5BFull%5D.mp3" )
Song.create(title: "Neon Dreams",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?adventure", length:258, mood_rank:3, bpm:112, key_of_song:"Am", song_url:"https://jawaragordon.com/music/energized/Neon%20Dreams.mp3" )
Song.create(title: "Terminus",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?adventure", length:357, mood_rank:3, bpm:170, key_of_song:"Ebm", song_url:"https://jawaragordon.com/music/energized/Terminus.mp3" )
Song.create(title: "Wit My Crew",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?adventure", length:231, mood_rank:3, bpm:150, key_of_song:"Em", song_url:"https://jawaragordon.com/music/energized/Wit%20My%20Crew1.mp3" )
Song.create(title: "Solar Wind",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?adventure", length:231, mood_rank:3, bpm:150, key_of_song:"Em", song_url:"https://jawaragordon.com/music/energized/Solar%20Wind.mp3" )
Song.create(title: "At The Trap",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?adventure", length:231, mood_rank:3, bpm:150, key_of_song:"Em", song_url:"https://jawaragordon.com/music/energized/%21At%20The%20Trap.mp3" )
Song.create(title: "Bring Em Back",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?adventure", length:231, mood_rank:3, bpm:150, key_of_song:"Em", song_url:"https://jawaragordon.com/music/energized/Bring%20Em%20Back.mp3" )
Song.create(title: "Gold Hoops",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?adventure", length:231, mood_rank:3, bpm:150, key_of_song:"Em", song_url:"https://jawaragordon.com/music/energized/Gold%20Hoops.mp3" )
Song.create(title: "Quick & Low",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?adventure", length:231, mood_rank:3, bpm:150, key_of_song:"Em", song_url:"https://jawaragordon.com/music/energized/Quick%20%26%20Low.mp3" )
Song.create(title: "R Blok R Hood",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?adventure", length:231, mood_rank:3, bpm:150, key_of_song:"Em", song_url:"https://jawaragordon.com/music/energized/R%20Blok%20R%20hood%20.mp3" )
Song.create(title: "Speakers Stacked Way Too High",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?adventure", length:231, mood_rank:3, bpm:150, key_of_song:"Em", song_url:"https://jawaragordon.com/music/energized/speakers%20stacked%20way%20too%20high.mp3" )
Song.create(title: "Follow Me Out",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?adventure", length:231, mood_rank:3, bpm:150, key_of_song:"Em", song_url:"https://jawaragordon.com/music/energized/Follow%20Me%20Out.mp3" )
Song.create(title: "Don't Stop",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?adventure", length:231, mood_rank:3, bpm:150, key_of_song:"Em", song_url:"https://jawaragordon.com/music/energized/Dont%20Stop%202022.mp3" )
Song.create(title: "On You",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?adventure", length:231, mood_rank:3, bpm:150, key_of_song:"Em", song_url:"https://jawaragordon.com/music/energized/On%20You%20Master.mp3" )

puts 'Seeding Focused Songs...'


Song.create(title: "Chakras",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?focused", length:209, mood_rank:1, bpm:144, key_of_song:"Em", song_url:"https://jawaragordon.com/music/focused/Chakras%20All.mp3" )
Song.create(title: "Arrival",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?focused", length:258, mood_rank:1, bpm:90, key_of_song:"Am", song_url:"https://jawaragordon.com/music/focused/Arrival.mp3" )
Song.create(title: "Flux Paradox",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?focused", length:357, mood_rank:1, bpm:100, key_of_song:"Ebm", song_url:"https://jawaragordon.com/music/focused/Flux%20Paradox.mp3" )
Song.create(title: "Movement",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?focused", length:231, mood_rank:1, bpm:70, key_of_song:"Em", song_url:"https://jawaragordon.com/music/focused/Movement.mp3" )

puts 'Seeding Intense Songs...'


Song.create(title: "Infrared Radiation",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?angry", length:209, mood_rank:4, bpm:70, key_of_song:"Em", song_url:"https://jawaragordon.com/music/intense/%21Infrared%20Radiation.mp3" )
Song.create(title: "Down Under",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?intense", length:258, mood_rank:4, bpm:90, key_of_song:"Am", song_url:"https://jawaragordon.com/music/intense/Down%20Under.mp3" )
Song.create(title: "Human Machine",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?intense", length:357, mood_rank:4, bpm:100, key_of_song:"Ebm", song_url:"https://jawaragordon.com/music/intense/Human%7CMachine.mp3" )
Song.create(title: "Tiamut",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?intense", length:231, mood_rank:4, bpm:70, key_of_song:"Em", song_url:"https://jawaragordon.com/music/intense/Tiamut.mp3" )
Song.create(title: "It's Too Late For You",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?angry", length:231, mood_rank:4, bpm:70, key_of_song:"Em", song_url:"https://jawaragordon.com/music/intense/It%27s%20TOO%20late%20for%20YOU.mp3" )
Song.create(title: "Tryna Get Paid",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?angry", length:231, mood_rank:4, bpm:70, key_of_song:"Em", song_url:"https://jawaragordon.com/music/intense/Tryna%20Get%20Paid.mp3" )
Song.create(title: "Starduster",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?angry", length:231, mood_rank:4, bpm:70, key_of_song:"Em", song_url:"https://jawaragordon.com/music/intense/Starduster.mp3" )
Song.create(title: "TRAP DOORZhttps://jawaragordon.com/music/intense/TRAP%20DOORZ.mp3" )
Song.create(title: "Don't Push Enter",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?angry", length:231, mood_rank:4, bpm:70, key_of_song:"Em", song_url:"https://jawaragordon.com/music/intense/Dont%20Push%20Enter.mp3" )
Song.create(title: "Hold The Light",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?angry", length:231, mood_rank:4, bpm:70, key_of_song:"Em", song_url:"https://jawaragordon.com/music/intense/Hold%20The%20Light.mp3" )
Song.create(title: "Collectors Theme",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?angry", length:231, mood_rank:4, bpm:70, key_of_song:"Em", song_url:"https://jawaragordon.com/music/intense/Collectors%20Theme.mp3" )
Song.create(title: "Timeless",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?angry", length:231, mood_rank:4, bpm:70, key_of_song:"Em", song_url:"https://jawaragordon.com/music/intense/Timeless.mp3" )


puts 'Seeding Happy Songs...'


Song.create(title: "I'll Be There",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?happy", length:209, mood_rank:5, bpm:75, key_of_song:"Em", song_url:"https://jawaragordon.com/music/happy/I%27ll%20Be%20There.mp3" )
Song.create(title: "Couped Up",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?happy", length:258, mood_rank:5, bpm:115, key_of_song:"Am", song_url:"https://jawaragordon.com/music/happy/Kill%20Paris%20–%20“Couped%20Up”%20%28DJ%20IMMINENT%20Nu-Disco%20Remix%29.mp3" )
Song.create(title: "Life Is A Journey",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?happy", length:357, mood_rank:5, bpm:170, key_of_song:"Ebm", song_url:"https://jawaragordon.com/music/happy/Life%20Is%20A%20Journey_Master.mp3" )
Song.create(title: "VIBEZ",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?happy", length:231, mood_rank:5, bpm:90, key_of_song:"Em", song_url:"https://jawaragordon.com/music/happy/VIBEZ.mp3" )
Song.create(title: "Grove St.",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?happy", length:231, mood_rank:5, bpm:115, key_of_song:"Em", song_url:"https://jawaragordon.com/music/happy/Grove%20St..mp3" )
Song.create(title: "Hvppy Trails",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?happy", length:231, mood_rank:5, bpm:112, key_of_song:"Em", song_url:"https://jawaragordon.com/music/happy/Hvppy%20Trails.mp3" )
Song.create(title: "Oasis",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?happy", length:231, mood_rank:5, bpm:90, key_of_song:"Em", song_url:"https://jawaragordon.com/music/happy/Oasis.mp3" )
Song.create(title: "What You Know About The Oboe",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?happy", length:231, mood_rank:5, bpm:90, key_of_song:"Em", song_url:"https://jawaragordon.com/music/happy/What%20You%20Know%20About%20the%20Oboe.mp3" )


puts 'Seeding Playlists...'

Playlist.create(name: "Chill 1", mood_rank: 2, user_id: User.first.id, image_url: "https://source.unsplash.com/random/?chill")


puts 'Seeding Favorite Song...'

FavoriteSong.create(song_id:Song.first.id, playlist_id:Playlist.first.id)

puts "✅ Done seeding!"