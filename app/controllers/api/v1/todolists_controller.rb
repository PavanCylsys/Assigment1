class Api::V1::TodolistsController < ApplicationController
  before_action :set_todolist, only: [:update, :destroy]
  skip_before_action :verify_authenticity_token


  def index
    @todolists = Todolist.all
    render json: @todolists 
  end

  def create
    @todolist = Todolist.new(todolist_params)
    
    if @todolist.save
      render json: { data: @todolist, status: 'success' } , status: :ok
    else
      render json: @todolist.errors, status: :unprocessable_entity
    end
  end

  def update
    if @todolist.update(todolist_params)
      render json: @todolist
    else
      render json: @todolist.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @todolist.destroy
    head :no_content
  end

  private

  def set_todolist
    @todolist = Todolist.find(params[:id])
  end

  def todolist_params
    params.require(:todolist).permit(:title, :note, :completed)
  end
end
