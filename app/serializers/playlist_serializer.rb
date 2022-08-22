class PlaylistSerializer < ActiveModel::Serializer
  # skip_before_action :authorize, only: [:playlist]
  attributes :id, :name, :date, :mood_rank, :user_id, :song_id
  has_one :user
  has_one :song

  # def playlist
  #   `#{self.object.name} - #{self.object.song_url}`
  # end

end
