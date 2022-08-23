class FavoriteSongsController < ApplicationController

    def create 
     favsong = FavoriteSong.create(favorite_params)
        render json: favsong, status: :created
    end

    private 

    def favorite_params
        params.permit(:id, :playlist_id, :song_id)
    end

end
