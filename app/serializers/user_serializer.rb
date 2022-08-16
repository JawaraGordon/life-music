class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :bio, :location, :age, :image_url
end
