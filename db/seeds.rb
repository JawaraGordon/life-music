puts 'Seeding Users...'

User.create(username: "Keisha",email: "keisha@gmail.com", password: "123", image_url:"https://jawaragordon.com/lifemusic/img/user1.png", bio:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat doloremque ea sunt doloribus voluptates temporibus, numquam delectus quaerat sed cumque?", age:22, location:"New York, USA" )
User.create(username: "Jalen",email: "jalen@gmail.com", password: "123", image_url:"https://jawaragordon.com/lifemusic/img/user2.png", bio:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat doloremque ea sunt doloribus voluptates temporibus, numquam delectus quaerat sed cumque?", age:28, location:"Los Angeles, USA" )
User.create(username: "Lori",email: "lori@gmail.com", password: "123", image_url:"https://jawaragordon.com/lifemusic/img/user3.png", bio:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat doloremque ea sunt doloribus voluptates temporibus, numquam delectus quaerat sed cumque?", age:34, location:"London, UK" )
User.create(username: "Alex",email: "alex@gmail.com", password: "123", image_url:"https://jawaragordon.com/lifemusic/img/user4.png", bio:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat doloremque ea sunt doloribus voluptates temporibus, numquam delectus quaerat sed cumque?", age:19, location:"Rio De Janeiro, Brazil" )

# puts 'Seeding Songs...'

# Song.create(title: "0500 Brunch",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?chill", length:209, mood_rank:2, bpm:85, key_of_song:"Em", song_url:"https://jawaragordon.com/music/chill/0500%20Brunch.mp3" )
# Song.create(title: "3AM FOMO",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?chill", length:258, mood_rank:2, bpm:80, key_of_song:"Am", song_url:"https://jawaragordon.com/music/chill/3AM%20FOMO%20ft.%20Andres.mp3" )
# Song.create(title: "Poolin Chillside",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?chill", length:357, mood_rank:2, bpm:93, key_of_song:"Ebm", song_url:"https://jawaragordon.com/music/chill/Poolin%20Chillside.mp3" )
# Song.create(title: "Paper Work",artist: "DJ Imminent", album_img: "https://source.unsplash.com/random/?chill", length:231, mood_rank:2, bpm:83, key_of_song:"Em", song_url:"https://jawaragordon.com/music/chill/Paper%20Work.mp3" )

puts "✅ Done seeding!"