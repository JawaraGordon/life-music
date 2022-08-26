class Playlist < ApplicationRecord
  belongs_to :user
  has_many :favorite_songs, dependent: :destroy
end
