class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :album_img, :key_of_song, :length, :bpm, :mood_rank, :song_url
end
