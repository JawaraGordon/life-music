class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :mood_rank
  has_one :user
  has_one :song
end
