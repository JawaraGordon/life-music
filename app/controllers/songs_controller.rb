class SongsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :destroy]
    def create
        song = Song.create(song_params)
        render json: song, status: :created
    end

    def index
        song = Song.all
        render json: song, status: :ok
    end

        def show 
            song = Song.find(params[:id])
            render json: song, status: :ok
        end
        

    def destroy
        song = Song.find(params[:id])
         song.destroy
         head :no_content
    end


    private 

    def song_params
        params.permit(:title, :artist, :album_img, :length, :mood_rank, :bpm, :key_of_song)
    
    end

end
