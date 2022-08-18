class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :destroy]

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
      render json: @current_user
    end

    def update
      user = User.find(params[:id])
      user.update!(user_params)
      render json: user
    rescue ActiveRecord::RecordInvalid => invalid
      render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def destroy
       user = User.find(params[:id])
        user.destroy
        head :no_content
    end

  
    private
  
    def user_params
      params.permit(:username, :password, :password_confirmation, :image_url, :bio, :age)
    end

end