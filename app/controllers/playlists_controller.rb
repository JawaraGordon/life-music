class PlaylistsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :show, :playlist]
    def create
        playlist = Playlist.create([playlist_params])
        # debugger
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

    # def playlist
    #     playlist = Playlist.find(params[:id])
    #     render json: playlist, serializer: PlaylistSongsSerializer
    #   end
  
  
      def destroy
         user = Playlist.find(params[:id])
          user.destroy
          head :no_content
      end
  
    
      private
    
      def playlist_params
        params.permit(:id, :name, :image_url, :mood_rank, :user_id, :song_id)
      end

end
