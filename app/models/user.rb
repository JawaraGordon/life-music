class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    has_many :playlists
    has_many :favorite_songs, through: :playlists
end
