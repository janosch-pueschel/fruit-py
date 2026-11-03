from django.http import JsonResponse


def send_fruits(request):
    fruits = [
        {"name": "Apple", "weight": 0.1, "color": "red"},
        {"name": "Mango", "weight": 0.4, "color": "green"},
        {"name": "Strawberry", "weight": 0.02, "color": "red"},
        {"name": "Banana", "weight": 0.1, "color": "red"},
        {"name": "Blueberry", "weight": 0.002, "color": "purple"},
    ]

    return JsonResponse(fruits, safe=False)
