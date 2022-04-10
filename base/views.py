from django.shortcuts import render

# Create your views here.
def Room(request):
    return render(request, 'base/room.html')


def Lobby(request):
    return render(request, 'base/lobby.html')