class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create]
  # GET /reviews
  def index
    @reviews = Review.all

    render json: @reviews
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # POST /reviews
  def create
    @review = Review.new(review_params)
    @review.user = @current_user
    @movie = Movie.find(params[:movie_id])
    @review.movie = @movie

    if @review.save
      render json: @review, status: :created, location: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end


  private

  def set_review
    @review = Review.find(params[:id])
  end
  def review_params
    params.require(:review).permit(:review, :user_id, :header, :movie_id)
  end

end
