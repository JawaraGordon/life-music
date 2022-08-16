class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create, :index, :destroy]

    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end

    def index
        user = User.all
        render json: user, status: :ok
    end

        def show 
            users = User.find(params[:id])
            render json: users, status: :ok
        end
        

    def destroy
        users = User.find(params[:id])
         users.destroy
         head :no_content
    end


    private 

    def user_params
        params.permit(:username, :email, :password, :image_url, :bio, :age, :location)
    
    end

end
