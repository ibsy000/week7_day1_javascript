def is_consecutive(a_list):
    for i in range(len(a_list)-1):
        if a_list[i] + 1 != a_list[i + 1]:
            return a_list[i]
print(is_consecutive([1, 2, 3, 5, 6, 7]))


def pos_nums_total(array):
    pos_total = 0
    for num in array:
        if num > 0:
            pos_total += num
    return pos_total

print(pos_nums_total([10, 12, -9, 3, -1, 0, 15]))