class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :destroy, :playists]

    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end

    def index
      users = User.all
        render json: users
    end
  
    def show
      if current_user
          render json: current_user, status: :ok
      else
          render json: { error: "User not logged in"}, status: :unauthorized
      end
  end

  def playlists
    if current_user
      render json: current_user.playlists, status: :ok
    else
      render json: { error: "User not logged in"}, status: :unauthorized
    end
  end

    def update
      user = User.find(params[:id])
      user.update!(user_params)
      render json: user
    rescue ActiveRecord::RecordInvalid => invalid
      render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def destroy
       users = User.find(params[:id])
        users.destroy
        head :no_content
    end

  
    private
  
    def user_params
      params.permit(:id, :username, :password, :password_confirmation, :image_url, :bio, :age)
    end

end