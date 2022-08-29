class PlaylistSerializer < ActiveModel::Serializer
  
  attributes :id, :name, :date, :mood_rank, :user_id
  belongs_to :user
  has_many :favorite_songs



end
