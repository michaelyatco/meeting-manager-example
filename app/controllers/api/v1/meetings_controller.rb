class Api::V1::MeetingsController < ApplicationController
  def index
    @meetings = Meeting.all
    render "index.json.jbuilder"
  end

  def create
    @meeting = Meeting.new(
      name: params[:name],
      address: params[:address],
      start_time: params[:start_time],
      end_time: params[:end_time],
      notes: params[:notes]
    )
    if @meeting.save
      # params[:tag_ids].each do |tag_id|
      #   MeetingTag.create(meeting_id: @meeting.id, tag_id: tag_id)
      # flash[:success] = "Your meeting has been created!" <----- Flash won't work with json
      render json: {success: "Meeting was created!"}
      # redirect_to "/meetings"
    else
      # flash[:error] = "Your meeting has not been created!"
      render json: {error: @meeting.errors.full_messages}, status: 422
    end
  end
end
