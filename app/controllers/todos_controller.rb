class TodosController < ApplicationController

  def index
    @todos = Todo.where('finished is null')

    respond_to do |format|
      format.html #index.html.slim
      format.json { render json: @todos }
    end
  end

  def create
    Todo.create(title: params[:title])
    respond_to do |format|
      format.json {head :ok}
    end
  end

  def update
    todo = Todo.find(params[:id])
    todo.update!(todo_params)

    respond_to do |format|
      format.json {head :ok}
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:finished, :title)
  end
end
