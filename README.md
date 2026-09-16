# My Collection Skills

Kho lưu trữ cá nhân cho các bộ AI skills có thể tái sử dụng.

## Mandatory routing

`skills/skill-loader/SKILL.md` là entrypoint bắt buộc. Mọi skill downstream phải được chọn qua `skill-loader` trước khi được nạp hoặc áp dụng. Xem `AGENTS.md` và `skills/skill-loader/INDEX.md`.

## Self-contained collection

Các downstream skill được lập chỉ mục phải nằm **trực tiếp trong repo này**. `skill-loader` không route sang personal mirror hoặc upstream repository để nạp skill lúc runtime. Upstream URL chỉ còn dùng cho attribution/provenance và kiểm tra phiên bản nguồn.

## Provenance policy

Mọi skill lấy từ một bộ skill gốc phải luôn giữ được thông tin **skill được lấy từ tác giả/bộ nguồn nào** trong source của repo này. Giữ `PROVENANCE.md` cạnh `SKILL.md`, gồm tối thiểu: original author, original collection/repository, upstream path, snapshot commit, license và trạng thái local modification. Không được làm mất attribution khi đổi tên, di chuyển, rút gọn hoặc điều chỉnh skill.

## Collections

### Anthropic

- `frontend-design` — lấy từ **Anthropic, PBC / `anthropics/skills`**. License và provenance nằm cùng thư mục skill.

### Matt Pocock

- `code-review` — lấy từ **Matt Pocock / `mattpocock/skills`**. License và provenance nằm cùng thư mục skill.

### Jesse Vincent / obra — Superpowers

14 skill từ **Jesse Vincent / obra / `obra/superpowers`** đã được vendored trực tiếp dưới `skills/` và không còn phụ thuộc `thanhtai-personal/superpowers` khi runtime nạp skill.

Collection-level source metadata:
- `skills/_sources/obra-superpowers/PROVENANCE.md`
- `skills/_sources/obra-superpowers/LICENSE.txt`

Mỗi skill Superpowers cũng có `PROVENANCE.md` riêng ghi upstream path, snapshot SHA và trạng thái local modification.

Repo này là collection cá nhân; attribution, provenance và license của từng nguồn phải được giữ nguyên khi thêm collection mới.
