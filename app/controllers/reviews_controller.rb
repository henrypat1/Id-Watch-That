class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]
  # before_action :authorize_request, only: [:index, :create]
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
    @movie = Movie.find(params[:movie_id])
    @review = Review.where(movie_id: @movie.id).new(review_params)

    if @review.save
      render json: @review, status: :created, location: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def review_params
    params.require(:review).permit(:review, :user_id, :movie_id)
  end

end
