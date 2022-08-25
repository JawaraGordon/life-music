class FavoriteSongsController < ApplicationController

    def create 
     favsong = FavoriteSong.create(favorite_params)
        render json: favsong, status: :created
    end

    def index
        favsongs = FavoriteSong.all
          render json: favsongs
      end

      def show 
        favsongs = FavoriteSong.find(params[:id])
        render json: favsongs, status: :ok
    end

    private 

    def favorite_params
        params.permit(:id, :playlist_id, :song_id)
    end

end
