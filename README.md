# My Collection Skills

Kho lưu trữ cá nhân cho các bộ AI skills có thể tái sử dụng.

## Mandatory routing

`skills/skill-loader/SKILL.md` là entrypoint bắt buộc. Mọi skill downstream phải được chọn qua `skill-loader` trước khi được nạp hoặc áp dụng. Xem `AGENTS.md` và `skills/skill-loader/INDEX.md`.

## Provenance policy

Mọi skill lấy từ một bộ skill gốc phải luôn giữ được thông tin **skill được lấy từ tác giả/bộ nguồn nào** trong source của repo này. Với skill được copy local, giữ `PROVENANCE.md` cạnh `SKILL.md`, gồm tối thiểu: original author, original collection/repository, upstream path, snapshot commit, license và trạng thái local modification. Không được làm mất attribution khi đổi tên, di chuyển hoặc gom skill vào collection này.

## Collections

### Local imported skills

- `frontend-design` — lấy từ **Anthropic, PBC / `anthropics/skills`**. Source + license + provenance nằm cùng thư mục skill.
- `code-review` — lấy từ **Matt Pocock / `mattpocock/skills`**. Source + license + provenance nằm cùng thư mục skill.

### obra/superpowers

Nguồn gốc: **Jesse Vincent / obra**, `https://github.com/obra/superpowers`
Personal mirror: https://github.com/thanhtai-personal/superpowers

Các Superpowers skill được lập chỉ mục trong `skills/skill-loader/INDEX.md`; runtime cần truy cập được personal mirror trước khi loader có thể nạp chúng.

Repo này là collection cá nhân; attribution, provenance và license của từng nguồn phải được giữ nguyên khi thêm collection mới.
