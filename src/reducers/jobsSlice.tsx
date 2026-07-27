import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import type { JobsFilters, Job, JobsPagination } from '../types';
import { jobsApi } from '../api/jobsApi';
import { getInitialFilters } from '../utils/getInitialFilters';

interface JobsResponse {
  jobs: Job[];
  pagination: JobsPagination | null;
}

export const fetchJobs = createAsyncThunk<JobsResponse, JobsFilters>(
  'jobs/fetchJobs',
  async (filters) => {
    const response = await jobsApi.getJobs(filters);
    return response as JobsResponse;
  },
);

interface JobsState {
  jobs: Job[];
  loading: boolean;
  error: string | null;
  pagination: JobsPagination | null;
  filters: JobsFilters;
}

const initialState: JobsState = {
  jobs: [],
  pagination: null,
  loading: false,
  error: null,
  filters: getInitialFilters(),
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
      state.filters.page = 1;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.filters.city = action.payload;
      state.filters.page = 1;
    },
    setSkills: (state, action: PayloadAction<string[]>) => {
      state.filters.skills = action.payload;
      state.filters.page = 1;
    },
    addSkill: (state, action: PayloadAction<string>) => {
      if (!state.filters.skills.includes(action.payload)) {
        state.filters.skills.push(action.payload);
        state.filters.page = 1;
      }
    },
    removeSkill: (state, action: PayloadAction<string>) => {
      state.filters.skills = state.filters.skills.filter(
        (skill) => skill !== action.payload,
      );
      state.filters.page = 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.filters.page = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.jobs = action.payload.jobs || [];
        state.pagination = action.payload.pagination || null;
        state.loading = false;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки';
      });
  },
});

export const { setSearch, setCity, setSkills, addSkill, removeSkill, setPage } =
  jobsSlice.actions;
export default jobsSlice.reducer;
