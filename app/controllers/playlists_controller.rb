class PlaylistsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :show, :playlist]
    
    def create
        playlist = Playlist.create(playlist_params)

        render json: playlist, status: :created
      end
  
      def index
        playlists = Playlist.all
          render json: playlists
      end

      def show 
        song = Playlist.find(params[:id])
        render json: song, status: :ok
    end
  
      def destroy
         playlist = Playlist.find(params[:id])
          playlist.destroy
          head :no_content
      end
    
      private
    
      def playlist_params
        params.permit(:id, :album_img, :artist, :bpm, :favorite_songs, :key_of_song, :length, :title, :song_url, :mood_rank, :user_id)
      end

end
