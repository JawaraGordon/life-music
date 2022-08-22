class PlaylistsController < ApplicationController
    skip_before_action :authorize, only: :create
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
         user = Playlist.find(params[:id])
          user.destroy
          head :no_content
      end
  
    
      private
    
      def playlist_params
        params.permit(:name, :image_url, :mood_rank, :image_url, :user_id, :song_id)
      end

end
