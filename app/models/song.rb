class Song < ApplicationRecord
    has_many :favorite_songs
    has_many :playlists, through: :favorite_songs
end
