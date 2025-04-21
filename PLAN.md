# Kế hoạch tối ưu hóa CI/CD và Docker

## **Phân tích hiện tại**
### **Workflow GitHub Actions**
1. **Trigger**:
   - Kích hoạt khi có `push` hoặc `pull_request` trên nhánh `main`.

2. **Runner**:
   - Sử dụng `self-hosted` runner.

3. **Các bước chính**:
   - **Checkout code**: Sử dụng `actions/checkout@v3`.
   - **Cài đặt Node.js**: Sử dụng `actions/setup-node@v3` với Node.js 18.
   - **Tạo file `.env`**: Tạo từ các biến môi trường và secrets.
   - **Sửa quyền thư mục `.tmp`**: Đảm bảo quyền truy cập đúng.
   - **Build và chạy Docker Compose**: Chạy script `run.sh`.
   - **Kiểm tra logs**: Sử dụng `docker compose logs`.
   - **Debug file `.env`**: In nội dung file `.env`.

4. **Chưa có bước kiểm tra sức khỏe (health check)**:
   - Phần kiểm tra sức khỏe container (`docker inspect`) đã bị comment.

### **Script `run.sh`**
1. **Build container**:
   - Sử dụng `docker compose build` với `--compress` và `--build-arg NODE_ENV=production`.

2. **Dừng container**:
   - Lệnh `docker compose stop`.

3. **Khởi động container**:
   - Sử dụng `docker compose --env-file ./.env up -d`.

4. **Dọn dẹp container cũ**:
   - Lệnh `docker container prune` xóa container đã dừng hơn 24 giờ.

5. **Dọn dẹp image không sử dụng**:
   - Lệnh `docker image prune` xóa image không sử dụng hơn 24 giờ.

---

## **Kế hoạch tối ưu hóa**
### **1. Tối ưu hóa Workflow GitHub Actions**
- **Caching**:
  - Thêm cache dependencies Node.js (`node_modules`) và Docker layers.
- **Parallelism**:
  - Chạy các bước build và test song song.
- **Health Check**:
  - Kích hoạt lại bước kiểm tra sức khỏe container (`docker inspect`).

### **2. Tối ưu hóa Docker**
- **Caching Docker Layers**:
  - Sử dụng các lệnh `COPY` và `RUN` hợp lý trong Dockerfile.
- **Resource Limits**:
  - Thêm giới hạn tài nguyên (`cpu`, `memory`) trong `docker-compose.yml`.

### **3. Tăng cường bảo mật**
- **Secrets Management**:
  - Đảm bảo các secrets được mã hóa.
- **Image Scanning**:
  - Sử dụng công cụ như Trivy để quét lỗ hổng bảo mật.

### **4. Logging và Monitoring**
- **Centralized Logging**:
  - Gửi logs đến dịch vụ tập trung như ELK Stack hoặc Fluentd.
    - **ELK Stack**:
      - **Thành phần**: Elasticsearch, Logstash, Kibana.
      - **Ưu điểm**:
        - Tìm kiếm logs mạnh mẽ với Elasticsearch.
        - Trực quan hóa logs qua Kibana.
        - Phân tích logs phức tạp.
      - **Nhược điểm**:
        - Yêu cầu tài nguyên cao.
        - Chi phí triển khai lớn.

    - **Fluentd + Loki**:
      - **Thành phần**: Fluentd (hoặc Fluent Bit), Loki, Grafana.
      - **Ưu điểm**:
        - Nhẹ, phù hợp với hệ thống tài nguyên hạn chế.
        - Tích hợp tốt với Prometheus/Grafana.
        - Chi phí thấp hơn.
      - **Nhược điểm**:
        - Khả năng tìm kiếm logs hạn chế hơn ELK Stack.
        - Trực quan hóa logs không mạnh bằng Kibana.

    #### **Monitoring**
    - **Prometheus và Grafana**:
      - Thu thập số liệu hiệu suất từ container.
      - Trực quan hóa dữ liệu và cung cấp cảnh báo theo thời gian thực.
      - Tích hợp tốt với Fluentd + Loki.

    #### **So sánh ELK Stack và Fluentd + Loki**
    | **Tiêu chí**         | **ELK Stack**                  | **Fluentd + Loki**             |
    |-----------------------|--------------------------------|---------------------------------|
    | **Khả năng tìm kiếm** | Mạnh mẽ (Elasticsearch)       | Tốt nhưng không mạnh bằng ELK  |
    | **Trực quan hóa**     | Kibana (rất mạnh)             | Grafana (tốt nhưng hạn chế hơn)|
    | **Hiệu suất**         | Yêu cầu tài nguyên cao hơn    | Nhẹ hơn                        |
    | **Khả năng mở rộng**  | Rất tốt                       | Tốt                            |
    | **Chi phí triển khai**| Cao hơn                       | Thấp hơn                       |
    | **Tích hợp Prometheus**| Không tích hợp sẵn           | Tích hợp tốt                   |

    #### **Đề xuất**
    - **ELK Stack**: Phù hợp với hệ thống cần phân tích logs phức tạp và có tài nguyên lớn.
    - **Fluentd + Loki**: Phù hợp với hệ thống tài nguyên hạn chế hoặc cần tích hợp với Prometheus/Grafana. 
- **Monitoring**:
  - Tích hợp Prometheus và Grafana để theo dõi hiệu suất container.

---

## **Sơ đồ kế hoạch**
```mermaid
graph TD
    A[GitHub Actions Trigger] --> B[Checkout Code]
    B --> C[Set up Node.js]
    C --> D[Set up Environment Variables]
    D --> E[Build Docker Containers]
    E --> F[Run Containers]
    F --> G[Health Check]
    G --> H[Log Monitoring]
    H --> I[Performance Optimization]