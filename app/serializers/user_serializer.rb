class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :bio, :location, :age, :image_url

  has_many :playlists

end
