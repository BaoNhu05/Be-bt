-- Câu 1: 5 người like nhà hàng nhiều nhất
SELECT 
    u.id AS user_id,
    u.full_name,
    COUNT(lr.res_id) AS total_likes
FROM Users u
JOIN Like_res lr ON u.id = lr.user_id
GROUP BY u.id, u.full_name
ORDER BY total_likes DESC
LIMIT 5;
-- Câu 2: 2 nhà hàng được like nhiều nhất
SELECT
    r.res_id,
    r.res_name,
    COUNT(lr.user_id) AS total_likes
FROM Restaurant r
JOIN Like_res lr ON r.res_id = lr.res_id
GROUP BY r.res_id, r.res_name
ORDER BY total_likes DESC
LIMIT 2;

-- Câu 3: Người đặt hàng nhiều nhất
SELECT
    u.id,
    u.full_name,
    COUNT(*) AS total_orders
FROM Users u
JOIN Orders o ON u.id = o.user_id
GROUP BY u.id, u.full_name
ORDER BY total_orders DESC
LIMIT 1;


-- Câu 4: Người dùng không hoạt động
SELECT
    u.id,
    u.full_name,
    u.email
FROM Users u
LEFT JOIN Orders o ON u.id = o.user_id
LEFT JOIN Like_res lr ON u.id = lr.user_id
LEFT JOIN Rate_res rr ON u.id = rr.user_id
WHERE
    o.user_id IS NULL
    AND lr.user_id IS NULL
    AND rr.user_id IS NULL;
