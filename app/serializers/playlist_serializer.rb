class PlaylistSerializer < ActiveModel::Serializer
  # skip_before_action :authorize, only: [:playlist]
  attributes :id, :name, :date, :mood_rank, :user_id
  belongs_to :user
  has_many :favorite_songs

  # def playlist
  #   `#{self.object.name} - #{self.object.song_url}`
  # end

end
