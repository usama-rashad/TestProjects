from turtle import xcor


def grade(score):
    if (score > 90):
        return 'A'
    elif ((score > 80) and (score < 90)):
        return 'B'
    elif ((score > 70) and (score < 80)):
        return 'C'
    elif ((score > 60) and (score < 70)):
        return 'D'
    elif (score < 60):
        return 'F'


students = [("Zakia", 98), ("usama", 65), ("Mama", 58), ("Baba", 85)]
studentGrades = [98, 65, 58, 85]

index = 0
for x in students:
    print("Name : " + students[0] + ", grade => " + grade(students[1]))
