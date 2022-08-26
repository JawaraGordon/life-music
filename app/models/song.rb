class Song < ApplicationRecord
    has_many :favorite_songs, dependent: :destroy
    has_many :playlists, through: :favorite_songs
end
