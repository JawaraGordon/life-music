class PlaylistsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :show, :playlist]
    
    def create
        playlist = Playlist.create!(playlist_params)
        params[:random_songs].map do | fav_song |
          FavoriteSong.create({playlist_id: playlist.id, song_id: fav_song[:id]})
        end
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
        params.permit(:id, :user_id, :random_songs)
      end

end
